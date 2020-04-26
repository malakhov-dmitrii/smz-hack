import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { Card } from 'antd';
import Sidebar from './shared/components/Sidebar';
import styles from './App.module.scss';
import cn from 'classnames';
import Notfound from './scenes/notfound';
import { Store } from './store';
import Login from './scenes/Login';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: Store) => state.config);

  useEffect(() => {
    // dispatch({ type: BalanceActions.GetBalance });
  }, [dispatch]);

  console.log(auth);
  

  return (
    <>
      <Router>
        <div className={styles.FlexColumn}>
          <div style={{ height: 'calc(100% - 90px)', overflowY: 'scroll' }}>
            <Header />

            <Card className={cn(styles.Card)}>
              <div className={styles.FlexWrapper}>
                {/* <Sidebar /> */}

                <div className={styles.CardBody}>
                  <Switch>
                    {!!auth &&
                      routes.map(route => (
                        <Route
                          key={route.path}
                          path={route.path}
                          component={route.children}
                          exact={route.path === '/'}
                        />
                      ))}

                    <Route path="/login" component={Login} />
                    <Route path="/" render={() => <Redirect to="/login" />} />
                    <Route path="**" component={Notfound} />
                  </Switch>
                </div>
              </div>
            </Card>
          </div>

          {!!auth && <Footer />}
        </div>
      </Router>
    </>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;

// {
//   "@typescript-eslint": [
//     "error",
//     {
//       "@typescript-eslint/no-explicit-any": false
//     }
//   ],
//   "prettier/prettier": ["error", { "singleQuote": true }]
// },
