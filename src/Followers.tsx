import React from 'react'
import styled from 'styled-components/macro'
import { of, Observable, from, Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import * as $ from 'jquery'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
`
class Followers extends React.Component {

    requestObservable: Observable<string> = of('https://api.github.com/users')
    responseObservable: Observable<any> | null = null
    componentDidMount() {
        this.responseObservable = this.requestObservable
            .pipe(
                flatMap(requestUrl =>
                    from($.getJSON(requestUrl))
                )
            )
        this.forceUpdate()//TODO ML 01/02 not good
    }

    createSuggestionStream = (responseObsv: Observable<any> | null) => {
        return responseObsv ? responseObsv
            .pipe(
                map((listUser: any) =>
                    listUser[Math.floor(Math.random() * listUser.length)]
                )
            )
            : null
    }

    render() {
        const items = [0, 1, 2]
        return (
            <Container>
                <FollowHeader >Who to follow <Link href="#">Refresh</Link></FollowHeader>
                <ProfileWrapper>
                    {items.map(item =>
                        <UserProfile key={item} observable={this.createSuggestionStream(this.responseObservable)} />)}
                </ProfileWrapper>

            </Container>
        )
    }
}

interface Props {
    observable: Observable<any> | null
}

interface State {
    userName: string
    userUrl: string
    imgSrc: string
}
class UserProfile extends React.PureComponent<Props, State> {

    subscriptions: Subscription | null = null
    constructor(props: Props) {
        super(props)
        this.state = { userUrl: '#', imgSrc: '#', userName: 'None' }
    }

    componentDidMount() {
        if (this.props.observable) {
            this.subscriptions = this.props.observable.subscribe(user => {
                this.updateData(user)
            })
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.observable !== this.props.observable) {
            if (this.props.observable) {
                this.subscriptions = this.props.observable.subscribe(user => {
                    this.updateData(user)
                })
            }
        }
    }

    componentWillUnmount() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe()
        }
    }

    updateData = (user: any) => {
        const userName = user.login
        const imgSrc = user.avatar_url
        const userUrl = user.html_url
        this.setState({ userName, imgSrc, userUrl })
    }
    render() {
        const { userUrl, imgSrc, userName } = this.state
        return (
            <Profile>
                <ImageWrapper >
                    <Img src={imgSrc} />
                </ImageWrapper> <a href={userUrl}>{userName}</a>
            </Profile>
        )
    }
}

const Link = styled.a`
    font-size: 10px;
    font-weight: normal;
`
const Profile = styled.li`
    background-color: inherit;
`

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    display: inline-block;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ProfileWrapper = styled.ul`
    list-style-type: none;
`

const FollowHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
`
export default Followers