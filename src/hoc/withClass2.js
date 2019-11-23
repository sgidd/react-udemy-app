import React from 'react';

const withClass = (WrappedComponent , classNameHere) => {
    //withClass is normal JS function that returns compoenent function
    return props => (
        <div className = {classNameHere }>
                <WrappedComponent/>
        </div>
        
    );
}

export default withClass;