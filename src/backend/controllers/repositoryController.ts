import { AxiosGithubClient } from '../../clients'

const fetchRepoDetail = async (req: any, res: any, next: any) => {

    const {
        username,
        repo,
    } = req.params;
    if (!username || repo) {
        res.status(400)
            .json({
                data: null,
                error: `Missing parameter 'username' or 'repo'`
            });

        next();
    }

    AxiosGithubClient.get(`repos/${username}/${repo}`)
        .then((response) => {
            res.status(200)
                .json({
                    data: response.data,
                    error: null,
                });
        })
        .catch((err) => {
            if (err.response.status === 404) {
                res.status(404)
                    .json({
                        data: null,
                        error: 'User not found',
                    });
            } else {
                res.status(500)
                    .json({
                        data: null,
                        error: err.response,
                    });
            }
        });
}

export default {
    fetchRepoDetail,
}