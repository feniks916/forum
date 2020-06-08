import instance, {createArticle} from '../API/API'

const SET_ARTICLES_DATA = 'SET_ARTICLES_DATA';
const SET_ERROR = 'SET_ERROR';
const SET_PAGENUMBER = 'SET_PAGENUMBER';
const SET_ISLOADED = 'SET_ISLOADED';
const GET_CURRENT_ARTICLE = 'GET_CURRENT_ARTICLE';
const GET_SLUG = 'GET_SLUG';

let initialState = {
    articles: [],
    isLoaded: false,
    pageNumber: 1,
    pageSize: 8,
    error: '',
    articlesQuantity: 0,
    currentArticle: { },
    slug: '',
}
console.log(initialState.currentArticle)

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES_DATA:
            return {
                ...state,
                ...action.payload,
            };
            case SET_ERROR:
                return {
                    ...state,
                    error: action.error
            };
            case GET_CURRENT_ARTICLE:
                return {
                    ...state,
                    currentArticle: action.payload,
            };
            case SET_ISLOADED:
                return {
                    ...state,
                    isLoaded: action.isLoaded
            };
            case GET_SLUG:
                return {
                    ...state,
                    slug: action.slug
            };
            case SET_PAGENUMBER:
                return {
                    ...state,
                    pageNumber: action.pageNumber
            };
        default:
            return state;
    }
}

export const setArticlesAC = (articles, articlesQuantity, isLoaded) => 
({ type: SET_ARTICLES_DATA, payload: {articles, articlesQuantity, isLoaded}});
export const setErrorAC = (error) => ({ type: SET_ERROR, error });
export const setLoadingAC = (isLoaded) => ({ type: SET_ISLOADED, isLoaded });
export const setPageNumberAC = (pageNumber) => ({ type: SET_PAGENUMBER, pageNumber });
export const getCurrentArticleAC = 
    (body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt) => 
    ({type: GET_CURRENT_ARTICLE, payload: {body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt}})
export const getSlugAC = (slug) => ({type: GET_SLUG, slug})


export const getArticle = (slug) => {
    return async (dispatch) => {
        try {
            const result = await instance.get(`/api/articles/${slug}`)
            let {body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt} = result.data.article;
            dispatch(getCurrentArticleAC(body, author, createdAt, description, favoritesCount, favorited, title, tagList, updatedAt))
            console.log(result)
            console.log(initialState.currentArticle)
        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
    
}

export const createArticleThunk = (data) => {
    return async (dispatch) => {
        try {
           const result = await createArticle(data)
           console.log(result.data) 
        } catch (error) {
            console.log(error)
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
}

export default articleReducer;