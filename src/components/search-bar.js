import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

/** The search input should lead to the search results page */
import { navigate } from "@reach/router";

const icon = graphql`
query {
    search: file(relativePath: { eq: "icons/ui-icons/search-48.png" })
    {
        childImageSharp {
            fixed (height: 20) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    check: file(relativePath: { eq: "icons/ui-icons/checkmark-48.png" })
    {
        childImageSharp {
            fixed (height: 14) {
                ...GatsbyImageSharpFixed
            }
        }
    }
}`

const SearchBar = (props) => {
    const [searchState, changeSearch] = useState({
        searchBarVisible: props.currWidth,
        languageDropdownVisible: false
    })

    const openSearchBar = () => {
        changeSearch({
            ...searchState,
            searchBarVisible: !searchState.searchBarVisible
        })
    }

    const openLanguageOptions = () => {
        changeSearch({
            ...searchState,
            languageDropdownVisible: !searchState.languageDropdownVisible
        })
    }

    const data = useStaticQuery(icon);

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate("/search");
        }        
    }

    return (
        <div className="searchDiv">
            <input type="text" id="search" style={searchState.searchBarVisible ? {display: "block"} : {display: "none"}} placeholder="Search..." autoComplete="off"
            onKeyPress={handleSearch} />
            <button className="searchOpenBtn" onClick={openSearchBar}>
                <Img 
                    fixed={data.search.childImageSharp.fixed}
                    alt="Search Icon"
                />
            </button>
            <button className="languageBtn" onClick={openLanguageOptions}>
                {props.currLang === 'EN' ? 'ENG' : 'FRA'} <FontAwesomeIcon icon={searchState.languageDropdownVisible ? faChevronUp : faChevronDown} />
            </button>
            <div className={searchState.languageDropdownVisible ? "languageDropDown languageDropDownOpen languageOptionDiv": "languageDropDown languageOptionDiv"}>
                <button className={props.currLang === 'EN' ? "languageOptionBtn bookmarkActive" : "languageOptionBtn"} onClick={props.selectLanguage} value='EN'>
                    English {props.currLang === 'EN' ? <Img fixed={data.check.childImageSharp.fixed} alt="checked"/> : ''}
                </button>
                <p style={{border: '1px solid #E8E8E8', marginBottom: '12px'}}></p>
                <button className={props.currLang === 'FR' ? "languageOptionBtn bookmarkActive" : "languageOptionBtn"} onClick={props.selectLanguage} value='FR'>
                    Fran&ccedil;ais {props.currLang === 'FR' ? <Img fixed={data.check.childImageSharp.fixed} alt="checked"/> : ''}
                </button>
            </div>
        </div>
    )
}

export default SearchBar;