import { connect } from 'react-redux';
import { thunk } from '../../Redux/mainPageReducer';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import instance from '../../API/API'
import { useHistory } from "react-router-dom";
import cls from './all.module.scss';
import { Pagination } from 'antd';
import { setArticlesAC, setPageNumberAC, setLoadingAC, getArticle, getSlugAC } from '../../Redux/Article'
import { getName } from '../../helpers/token';

const ArticlesPage = (props) => {
    const history = useHistory();
    const username = getName();
    console.log(username)
    const [articles, setArticles] = useState([])
    const [pagesQuantity, seTpagesQuantity] = useState(1);
    console.log(pagesQuantity)
    const [page, seTpage] = useState(props.pageNumber)

    let buttonsArray = []
    for (let i = 1; i <= pagesQuantity; i++) {
        buttonsArray.push(i)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await instance.get(`/api/articles?offset=${props.pageNumber === 1 ? 0 : (props.pageNumber-1)*(props.pageSize)}&limit=${props.pageSize}`)
                props.setArticlesAC(result.data.articles, result.data.articlesCount, true, result.data.favorited)
                seTpagesQuantity(Math.ceil(result.data.articlesCount / props.pageSize))
                setArticles(result.data.articles)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }
        fetchData();
    }, [props.pageNumber])

    const onChange = page => {
        props.setLoadingAC(false)
        props.setPageNumberAC(page)
        seTpage(page)
    };
    const getSlug = (slug) => {
        history.push("/forum/article");
        sessionStorage.setItem('slug', slug);
        props.getSlugAC(slug)
    }
    const createArtice = () => {
        history.push("/forum/developmentPage");
    }
    return (
        <div className={cls.wrapper}>
            <button
                onClick={createArtice}>Create Article</button>
            <div className={cls.pagination}>
                {pagesQuantity !== 0 &&
                    <Pagination
                        defaultCurrent={1}
                        current={page}
                        onChange={onChange}
                        showSizeChanger={false}
                        pageSize={props.pageSize}
                        total={props.articlesQuantity}
                    />}
            </div>
            <ul className={cls.ul}>
                {articles.length !== 0 && props.isLoaded && articles.map((el, index) => {
                    return <li key={index}
                        onClick={() => getSlug(el.slug)}
                        
                    >
                        <div className={cls.card}>
                            { username === el.author.username &&
                            <button
                            onClick={(e)=>{
                                e.stopPropagation();
                                getSlug(el.slug)
                                history.push("/forum/editPage");
                            }}
                            >
                               <h4> Change Article</h4>
                            </button>}
                            <img src="https://i.pinimg.com/564x/e4/60/f7/e460f7091d13115e6f0f22f5662b3fe7.jpg" alt="mountain" />
                            <div className={cls.authorInfo}>
                                <h2>{el.title}</h2>
                                <p>{el.author.username}</p>
                                <h4> {el.tagList.join(', ')}</h4>
                                <h4>{index}</h4>
                            </div>
                            <div className={cls.textBody}>
                                <h3>{el.body}</h3>
                            </div>
                            <div className={cls.cardFooter}>
                                <h5>{el.description}</h5>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (el.favorited === false) {
                                            el.favoritesCount += 1
                                        }
                                        if (el.favorited === true) {
                                            el.favoritesCount -= 1
                                            return el.favorited === false
                                        }
                                        console.log(el.favoritesCount)
                                    }}
                                ><h5>{el.favoritesCount || 0}</h5></button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <div>
                <p>{!props.isLoaded && '...loading'}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articlesData.articles,
    pageSize: state.articlesData.pageSize,
    pageNumber: state.articlesData.pageNumber,
    isLoaded: state.articlesData.isLoaded,
    articlesQuantity: state.articlesData.articlesQuantity,
})

const AllArticlesContainer = connect(mapStateToProps, { setArticlesAC, setPageNumberAC, setLoadingAC, getArticle, getSlugAC })(ArticlesPage)

export default AllArticlesContainer;