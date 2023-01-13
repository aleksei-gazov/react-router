import * as React from "react";
import { Link } from "react-router-dom";

type AsideType = {

}

export const Aside = (props: AsideType) => {


return (
  <div className={'aside'}>
    <nav>
        <ul>
          <li>
            <Link to="/blog"> Blog</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
        </ul>
      </nav>
      <div>
      <button>
        Blog
      </button>
  </div>
  <button>
       
Article
      </button>
  <div>
  </div>
  </div>
)

}
