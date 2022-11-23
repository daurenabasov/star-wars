import { React, useState, useEffect } from "react";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList";
import PropTypes from "prop-types";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const query = useQueryParams();
  const queryPage = query.get("page");
  console.log(queryPage);

  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log(res);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <h1 className="header__text">Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
