import React, { Component } from 'react';
import './style.css';

class FilterLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if(active) {
            return (
                <span className="link link_state_active">{children}</span>
            );
        }

        return(
            <a
                className="link"
                onClick={e => {
                    e.preventDefault();
                    onClick();
                }}
            >
                {children}
            </a>
        );
    }
}

export default FilterLink;
