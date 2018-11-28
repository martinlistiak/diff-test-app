import { ApolloGithubClient } from '../../clients';
import fetchUserQuery from '../gql/fetchUser.gql';

const fetchUser = async (req: any, res: any, next: any) => {

    try {
        const { username } = req.params;
        if (!username) {
            res.status(400)
                .json({
                    data: null,
                    error: `Missing parameter 'username'`
                });

            next();
        }

        const userData = await ApolloGithubClient.query({
            query: fetchUserQuery,
            variables: {
                login: username,
            },
        });

        if (userData) {
            res.status(200)
                .json({
                    data: userData.data,
                    error: null,
                });
        } else {
            res.status(404)
                .json({
                    data: null,
                    error: 'User not found',
                });
        }
    } catch (err) {
        res.status(500)
            .json({
                data: null,
                error: err.response,
            });
    }
}

export default {
    fetchUser,
}