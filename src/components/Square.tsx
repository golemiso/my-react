import * as React from 'react';

interface SquareProps {
    black: boolean;
}

export default class Square extends React.Component<SquareProps, {}> {
    render() {
        const {black} = this.props;
        const fill = black ? 'black' : 'white';
        const color = black ? 'white' : 'black';

        return (
            <div
                style={{
                    backgroundColor: fill,
                    color: color,
                    width: '100%',
                    height: '100%'
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
