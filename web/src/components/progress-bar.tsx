import React from 'react';

function ProgressBar(props: { bgcolor: string; completed: number; }) {

    const { bgcolor, completed} = props;

    const containerStyles = {
        height: 20,
        width: '75%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit'
        };

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      );
}
  
  export default ProgressBar;