import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Pages.
import BookmarkClonePage from './BookmarkClonePage';
import BookmarkCreatePage from './BookmarkCreatePage';
import BookmarkDeletePage from './BookmarkDeletePage';
import BookmarkMergePage from './BookmarkMergePage';
import BookmarkReadPage from './BookmarkReadPage';
import BookmarkSearchPage from './BookmarkSearchPage';
import BookmarkUpdatePage from './BookmarkUpdatePage';
import NoMatchPage from './NoMatchPage';
import SettingsPage from './SettingsPage';
import SignInPage from './SignInPage';
import TagClonePage from './TagClonePage';
import TagCreatePage from './TagCreatePage';
import TagDeletePage from './TagDeletePage';
import TagMergePage from './TagMergePage';
import TagReadPage from './TagReadPage';
import TagSearchPage from './TagSearchPage';
import TagUpdatePage from './TagUpdatePage';

// -----------------------------------------------------------------------------

// TODO: Cleanup <App /> component.
const App = () => (
  <Router>
    <div>
      <nav role="navigation" aria-labelledby="nav-heading">
        <h4 id="nav-heading">Main Menu</h4>
        <ul>
          <li>
            <Link to="/bookmarks/new">Create</Link>
          </li>
          <li>
            <Link to="/bookmarks">Search</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          {/* TODO: Remove temporary nav links used for development */}
          <br />
          <li>
            <Link to="/">Home (Redirect)</Link>
          </li>
          <br />
          <li>
            <Link to="/signin">SignInPage</Link>
          </li>
          <br />
          <li>
            <Link to="/bookmarks?q=q&f=f1,f2&s=s1,s2">BookmarkSearchPage</Link>
          </li>
          <li>
            <Link to="/bookmarks/import">BookmarkImportPage</Link>
          </li>
          <li>
            <Link to="/bookmarks/export">BookmarkExportPage</Link>
          </li>
          <li>
            <Link to="/bookmarks/new">BookmarkCreatePage</Link>
          </li>
          <li>
            <Link to="/bookmarks/xxx/edit">BookmarkUpdatePage</Link>
          </li>
          <li>
            <Link to="/bookmarks/xxx/clone">BookmarkClonePage</Link>
          </li>
          <li>
            <Link to="/bookmarks/xxx/merge">BookmarkMergePage</Link>
          </li>
          <li>
            <Link to="/bookmarks/xxx/delete">BookmarkDeletePage</Link>
          </li>
          <li>
            <Link to="/bookmarks/xxx">BookmarkReadPage</Link>
          </li>
          <br />
          <li>
            <Link to="/tags?q=q&f=f1,f2&s=s1,s2">TagSearchPage</Link>
          </li>
          <li>
            <Link to="/tags/new">TagCreatePage</Link>
          </li>
          <li>
            <Link to="/tags/xxx/edit">TagUpdatePage</Link>
          </li>
          <li>
            <Link to="/tags/xxx/clone">TagClonePage</Link>
          </li>
          <li>
            <Link to="/tags/xxx/merge">TagMergePage</Link>
          </li>
          <li>
            <Link to="/tags/xxx/delete">TagDeletePage</Link>
          </li>
          <li>
            <Link to="/tags/xxx">TagReadPage</Link>
          </li>
          <br />
          <li>
            <Link to="/settings">SettingsPage</Link>
          </li>
          <br />
          <li>
            <Link to="/xxx">NoMatchPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Redirect from="/" exact to="/bookmarks" />

        <Route path="/signin" component={SignInPage} />

        <Route path="/bookmarks" exact component={BookmarkSearchPage} />
        <Route path="/bookmarks/new" component={BookmarkCreatePage} />
        <Route
          path="/bookmarks/:bookmarkId/edit"
          component={BookmarkUpdatePage}
        />
        <Route
          path="/bookmarks/:bookmarkId/clone"
          component={BookmarkClonePage}
        />
        <Route
          path="/bookmarks/:bookmarkId/merge"
          component={BookmarkMergePage}
        />
        <Route
          path="/bookmarks/:bookmarkId/delete"
          component={BookmarkDeletePage}
        />
        <Route path="/bookmarks/:bookmarkId" component={BookmarkReadPage} />

        <Route path="/tags" exact component={TagSearchPage} />
        <Route path="/tags/new" component={TagCreatePage} />
        <Route path="/tags/:tagId/edit" component={TagUpdatePage} />
        <Route path="/tags/:tagId/clone" component={TagClonePage} />
        <Route path="/tags/:tagId/merge" component={TagMergePage} />
        <Route path="/tags/:tagId/delete" component={TagDeletePage} />
        <Route path="/tags/:tagId" component={TagReadPage} />

        <Route path="/settings" component={SettingsPage} />

        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </Router>
);

// -----------------------------------------------------------------------------

export default App;
