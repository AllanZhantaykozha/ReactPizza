import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../components/Card/Skeleton';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { Card } from '../components/Card';
import { Pagination } from '../components/Pagination';
import { useContext } from 'react';
import { SearchContext } from '../App';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://638dcb994190defdb74d9933.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />

        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};
