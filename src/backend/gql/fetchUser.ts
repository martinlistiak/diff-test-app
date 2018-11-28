import { grapqhl } from 'react-apollo';

export default grapqhl(gql`query {
    user ($login: String!) {
        login
        name
        avatarUrl
        location
        url
        createdAt
        repositories {
            name
            updatedAt
            issues {
                id
            }
            watchers {
                id
            }
        }
    }
}`);
