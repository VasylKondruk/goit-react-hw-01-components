import PropTypes from 'prop-types';

export default function Statistics({ id, label, percentage }) {
    return (
        <section className="statistics">
            {/* <h2 className="title">"Upload stats"</h2> */}

            <ul className="stat-list">
                
                <li className="item">
                    <span className="label"> {label}</span>
                    <span className="label"> {label}</span>
                    <span className="percentage"> {percentage}%</span>
        
                </li>
                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
  
};