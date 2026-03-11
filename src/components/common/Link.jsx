import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Custom Link component for hash-based routing
 * @param {Object} props - Component props
 * @param {string} props.to - Hash route
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 */
export const Link = ({ to, children, className, onClick, ...props }) => {
    const handleClick = (e) => {
        if (onClick) onClick(e);
    };

    return (
        <a href={to} className={classNames(className)} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Link.defaultProps = {
    className: "",
    onClick: null,
};