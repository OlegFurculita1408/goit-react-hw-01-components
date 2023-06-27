import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../randomColor.js'
import st from './statistics.module.css';


function Statistics ({title='', data}) { 
    return (
            <section className={st.statistics}>
                <h2 className={st.title}>{title}</h2>
                <ul className={st.statisticsList}>
                {
                    data.map(({ id, label, percentage}) => (
                    <li className={st.statisticsItem} key = {id} style={{backgroundColor: getRandomHexColor()}}>
                        <span className={st.label}>{label}</span>
                        <span className={st.percentage}>{percentage}%</span>
                    </li>
                ))}
                </ul>
            </section>
        );

}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,  
}
export default Statistics;