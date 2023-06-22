import data from '../data/data.json';

function Statistics (props) {
    const { id, label, percentage, title="Upload stats" } = props;
        <section key={id} class="statistics">
            <h2 class="title">{title}</h2>
            <ul class="stat-list">
                <li class="item">
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}</span>
                </li>
            </ul>
        </section>
    }
    export default Statistics;

// const Statistics = data.map((props) => {
//     const { id, label, percentage, title="Upload stats" } = props;
//     <section class="statistics">
//             <h2 class="title">{title}</h2>
//             <ul class="stat-list">
//                 <li class="item" key={id}>
//                     <span class="label">{label}</span>
//                     <span class="percentage">{percentage}</span>
//                 </li>
//             </ul>
//         </section>
// })
// export default Statistics;