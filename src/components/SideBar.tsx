import { Button } from "./Button";

import {GenreResponseProps} from '../App'

interface SideBarProps{
  fn: (id:number) => void,
  selectedGenreId:number,
  genres:GenreResponseProps[],
}

export function SideBar({fn, genres, selectedGenreId}:SideBarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => fn(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}