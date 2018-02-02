import * as Action from 'src/action';
import * as React from 'react';
import * as RN from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import styled, { withTheme } from 'styled-components';
import { connect } from 'react-redux';
import ProgressBar from './progressBar';
import * as I from 'src/interface';

const html = `
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0, user-scalable=yes" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/styles/{THEME}.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"></script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
</head>{BODY}</html>
`;

@withTheme
class CardView extends React.Component<
  Props & { card: Card } & AppContext,
  {}
> {
  getStyle() {
    const { theme } = this.props;
    return `
    background-color: ${theme.cardBackgroundColor};
    color: ${theme.mainColor};
    font-size: 18px;
    margin: 0;
    padding: 0;
    `;
  }
  getBody() {
    const body = `<body style="${this.getStyle()}"></body><pre><code style="${this.getStyle()}" className="golang"></code>${
      this.props.card.body
    }</code></pre></body>
    `;
    return body;
  }
  render() {
    return (
      <RN.WebView
        automaticallyAdjustContentInsets={false}
        scrollEnabled={true}
        bounces={false}
        source={{
          html: html
            .replace('{BODY}', this.getBody())
            .replace('{THEME}', this.props.state.config.theme),
        }}
        style={{
          backgroundColor: this.props.theme.cardBackgroundColor,
        }}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({ state });
const _mapStateToProps = I.returntypeof(mapStateToProps);
const mapDispatchToProps = {};
type Props = typeof _mapStateToProps & typeof mapDispatchToProps;
export default connect(mapStateToProps, mapDispatchToProps)(CardView);
