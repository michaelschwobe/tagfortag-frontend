import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

// Pages.
import BookmarkCreatePage from './BookmarkCreatePage';
import BookmarkMergePage from './BookmarkMergePage';
import BookmarkReadPage from './BookmarkReadPage';
import BookmarkSearchPage from './BookmarkSearchPage';
import BookmarkUpdatePage from './BookmarkUpdatePage';
import NoMatchPage from './NoMatchPage';
import SettingsPage from './SettingsPage';
import SignInPage from './SignInPage';
import TagCreatePage from './TagCreatePage';
import TagMergePage from './TagMergePage';
import TagReadPage from './TagReadPage';
import TagSearchPage from './TagSearchPage';
import TagUpdatePage from './TagUpdatePage';

// -----------------------------------------------------------------------------

// TODO: Write <App /> component.
const App = () => (
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
          <Link to="/bookmarks/xxx">BookmarkReadPage</Link>
        </li>
        <li>
          <Link to="/bookmarks/xxx/edit">BookmarkUpdatePage</Link>
        </li>
        <li>
          <Link to="/bookmarks/merge?a=a&b=b">BookmarkMergePage</Link>
        </li>
        <br />
        <li>
          <Link to="/tags?q=q&f=f1,f2&s=s1,s2">TagSearchPage</Link>
        </li>
        <li>
          <Link to="/tags/new">TagCreatePage</Link>
        </li>
        <li>
          <Link to="/tags/xxx">TagReadPage</Link>
        </li>
        <li>
          <Link to="/tags/xxx/edit">TagUpdatePage</Link>
        </li>
        <li>
          <Link to="/tags/merge?a=a&b=b">TagMergePage</Link>
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
      <Route path="/bookmarks/merge" component={BookmarkMergePage} />
      <Route
        path="/bookmarks/:bookmarkId/edit"
        component={BookmarkUpdatePage}
      />
      <Route path="/bookmarks/:bookmarkId" component={BookmarkReadPage} />

      <Route path="/tags" exact component={TagSearchPage} />
      <Route path="/tags/new" component={TagCreatePage} />
      <Route path="/tags/merge" component={TagMergePage} />
      <Route path="/tags/:tagId/edit" component={TagUpdatePage} />
      <Route path="/tags/:tagId" component={TagReadPage} />

      <Route path="/settings" component={SettingsPage} />

      <Route component={NoMatchPage} />
    </Switch>
  </div>
);

// -----------------------------------------------------------------------------

export default App;
