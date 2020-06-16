import instance, {createArticle} from '../API/API'

const SET_ARTICLES_DATA = 'SET_ARTICLES_DATA';
const SET_ERROR = 'SET_ERROR';
const SET_PAGENUMBER = 'SET_PAGENUMBER';
const SET_ISLOADED = 'SET_ISLOADED';
const GET_CURRENT_ARTICLE = 'GET_CURRENT_ARTICLE';
const GET_SLUG = 'GET_SLUG';
const MAKE_FAVORITE = 'MAKE_FAVORITE';
const MAKE_UNFAVORITE = 'MAKE_UNFAVORITE';
const SET_DELETED_SLUG = 'SET_DELETED_SLUG';
const MAKE_FAVORITE_CURRENT_ARTICLE = 'MAKE_FAVORITE_CURRENT_ARTICLE';
const MAKE_UNFAVORITE_CURRENT_ARTICLE = 'MAKE_UNFAVORITE_CURRENT_ARTICLE';
const SET_ISCREATED = 'SET_ISCREATED';

let initialState = {
    articles: [],
    isLoaded: false,
    pageNumber: 1,
    pageSize: 10,
    error: '',
    articlesQuantity: 0,
    currentArticle: {},
    slug: '',
    isCreated: false
}

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
            case SET_ISCREATED:
                return {
                    ...state,
                    isCreated: action.isCreated
            };
            case MAKE_FAVORITE:
                return {
                    ...state,
                    articles: state.articles.map(el => {
                        if (el.slug === action.slug)
                       { return { ...el,favorited: true,
                        favoritesCount: el.favoritesCount + 1,
                        }}
                        return el
                    })
            };
            case MAKE_UNFAVORITE:
                return {
                    ...state,
                    articles: state.articles.map(el => {
                        if (el.slug === action.slug)
                        {
                        return { ...el,favorited: false,
                            favoritesCount: el.favoritesCount - 1,
                        }
                    }
                    return el
                    })
            };
            case MAKE_FAVORITE_CURRENT_ARTICLE:
                return {
                    ...state,
                    currentArticle: { ...state.currentArticle,favorited: true,
                        favoritesCount: state.currentArticle.favoritesCount + 1,
                    }
            };
            case MAKE_UNFAVORITE_CURRENT_ARTICLE:
                return {
                    ...state,
                    currentArticle: { ...state.currentArticle,favorited: false,
                            favoritesCount: state.currentArticle.favoritesCount - 1,
                        }
            };
            case GET_CURRENT_ARTICLE:
                return {
                    ...state,
                    currentArticle: action.payload,
            };
            case SET_DELETED_SLUG:
                return {
                    ...state,
                    articles: state.articles.filter(el => el.slug !== action.slug)
                }
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
export const setCreatedAC = (isCreated) => ({ type: SET_ISCREATED, isCreated });
export const setDeletedSlug = (slug) => ({type: SET_DELETED_SLUG, slug})
export const setFavoriteAC = (slug) => ({ type: MAKE_FAVORITE, slug });
export const setUnfavoriteAC = (slug) => ({ type: MAKE_UNFAVORITE, slug });
export const setFavoriteCurrentAC = (slug) => ({ type: MAKE_FAVORITE_CURRENT_ARTICLE, slug });
export const setUnfavoriteCurrentAC = (slug) => ({ type: MAKE_UNFAVORITE_CURRENT_ARTICLE, slug });
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
        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
    
}

export const deleteArticle = (slug) => {
    return async (dispatch) => {
        try {
            const result = await instance.delete(`/api/articles/${slug}`)
            dispatch(setDeletedSlug(slug))

        } catch (error) {
            dispatch(setErrorAC(error))
        }
    }
}

export const likeArticle = (slug) => {
    return async (dispatch) => {
        try {
            const result = await instance.post(`api/articles/${slug}/favorite`)
            console.log(result)

        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
}

export const unfavoriteArticle = (slug) => {
    return async (dispatch) => {
        try {
            const result = await instance.delete(`api/articles/${slug}/favorite`)
            console.log(result)

        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
}

export const createArticleThunk = (data) => {
    return async (dispatch) => {
        try {
           const result = await createArticle(data)
            dispatch(setCreatedAC(true))
        } catch (error) {
            console.log(error.response)
            dispatch(setErrorAC(error.response.data.errors))
        }
    }
}

export default articleReducer;