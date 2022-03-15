import { Link } from "react-router-dom"
import "./Lists.css"

export default function Lists({lists}) {

      return (
        <div>
          <h2 className="lists">Here is all your lists:</h2>
          {Array.isArray(lists) &&
            lists.map((list) => {
              return (
                <Link
                  className="list-titles"
                  key={list.id}
                  to={`/lists/${list.id}`}
                >
                  <h2>{list.title}</h2>
                </Link>
              );
            })}
        </div>
      );
}
