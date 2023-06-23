

function Statistics (props) {
    const { id, label, percentage, title="Upload stats" } = props;
        return (<section key={id} className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                <li className="item">
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            </ul>
        </section>
        );
    }

export default Statistics;
