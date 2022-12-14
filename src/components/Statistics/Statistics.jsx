import PropTypes from 'prop-types';

export const Statistics = ({ id, label, percentage }) => {
    return (
        <section className="statistics">
            {/* <h2 className="title">"Upload stats"</h2> */}

            <ul className="stat-list">
                
                <li className="item">
                    <span className="label"> {label}</span>
                    <span className="percentage"> {percentage}%</span>
        
                </li>
                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    // id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  
};