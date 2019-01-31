import React from 'react'
import styled from 'styled-components/macro'
import { of, Observable, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import * as $ from 'jquery'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
`
class Followers extends React.Component {

    requestObservable: Observable<string> = of('https://api.github.com/users')
    componentDidMount() {
        const responseObservable = this.requestObservable
            .pipe(
                flatMap(requestUrl =>
                    from($.getJSON(requestUrl))
                )
            )

        responseObservable.subscribe(response => {
            console.log(response[0].login)
            console.log(response[1].login)
            console.log(response[2].login)
        })

    }

    createSuggestionStream = (responseObsv: Observable<any>) => {
        return responseObsv
            .pipe(
                map((listUser: any) =>
                    listUser[Math.floor(Math.random() * listUser.length)]
                )
            )
    }

    render() {
        const items = [0, 1, 2]
        return (
            <Container>
                <FollowHeader >Who to follow <Link href="#">Refresh</Link></FollowHeader>
                <ProfileWrapper>
                    {items.map(item =>
                        <Profile key={item}>
                            <ImageWrapper />
                        </Profile>)}
                </ProfileWrapper>

            </Container>
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
`

const ProfileWrapper = styled.ul`
    list-style-type: none;
`

const FollowHeader = styled.div`
    font-weight: bold;
`
export default Followers