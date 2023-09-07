import React, {useState} from 'react';
import API from './API';

interface SearchResult {
    Title: string;
    Year: string;
    Poster: string
}

interface ErrorResult {
    error: string;
}

const Lesson3: React.FC = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<SearchResult | ErrorResult | null>(null);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState<SearchResult | ErrorResult | null>(null);

    const searchFilm = (): void => {
        API.searchFilmsByTitle(searchName)
            .then((result: SearchResult) => {
                setSearchResult(result);
            })
            .catch((error: Error) => {
                console.error('Error searching films by name:', error);
                setSearchResult({error: 'Error occurred while searching films by name.'});
            });
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
            .then((result: SearchResult) => {
                setSearchResultByType(result);
            })
            .catch((error: Error) => {
                console.error('Error searching films by type:', error);
                setSearchResultByType({error: 'Error occurred while searching films by type.'});
            });
    };

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3>Search by name:</h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult && 'Title' in searchResult && (
                        <div>
                            <h4>{searchResult.Title}</h4>
                            <img style={{width:200}} src={searchResult.Poster} alt={searchResult.Title}/>
                            <p>Year: {searchResult.Year}</p>
                        </div>
                    )}
                    {searchResult && 'error' in searchResult && <p>{searchResult.error}</p>}
                </div>
            </div>

            <div>
                <h3>Search by type:</h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType && 'Title' in searchResultByType && (
                        <div>
                            <h4>{searchResultByType.Title}</h4>
                            <img style={{width:200}} src={searchResultByType.Poster} alt={searchResultByType.Title}/>
                            <p>Year: {searchResultByType.Year}</p>
                        </div>
                    )}
                    {searchResultByType && 'error' in searchResultByType && <p>{searchResultByType.error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Lesson3;