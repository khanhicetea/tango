import * as Action from 'src/action';
import * as I from 'src/interface';
import * as React from 'react';
import * as RN from 'react-native';
import CardList from './card';
import CardView from './view';
import DeckList from './deck';
import Header from './header';
import { connect } from 'react-redux';
import { Container } from './styled';
import { LoadingIcon } from './utils';

class Main extends React.Component<Props, {}> {
  async componentDidMount() {
    await this.props.selectDeck();
    await this.props.selectCard();
  }
  render() {
    const { nav, config } = this.props.state;
    return (
      <Container>
        {config.isLoading && <LoadingIcon />}
        <Header />
        {nav.deck && nav.index !== undefined && <CardView />}
        {nav.deck && nav.index === undefined && <CardList />}
        {!nav.deck && <DeckList />}
      </Container>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  state,
});
const _mapStateToProps = I.returntypeof(mapStateToProps);
const mapDispatchToProps = {
  selectCard: Action.selectCard,
  selectDeck: Action.selectDeck,
};
type Props = typeof _mapStateToProps & typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(Main);