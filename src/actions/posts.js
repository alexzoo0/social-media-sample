import * as api from '../api';

export const getPosts = () => async (dispactch) => {
    try {
        const { data } = await api.fetchPosts();

        dispactch({ type: 'FETCH_ALL', payload:  data })
    } catch (error) {
        console.log(error.message);
    }
    
}