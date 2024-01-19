import '../css/App.css'
import '../css/Tasks.css'

export default function Tasks() {

    return (
        <main id='content'>
            <h1>Workouts</h1>
            <div className='filter'>
                <h3>Filter by:</h3>
                <div className='selector'>
                <label htmlFor="monthSelector">Month:</label>
                    <select id="monthSelector">
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="setember">Setember</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                </div>
                
                <div className='selector'>
                    <label htmlFor="bodySelector">Region:</label>
                    <select id='bodySelector'>
                        <option value="posterior-thigh">Posterior Thigh</option>
                        <option value="quadriceps">Quadriceps</option>
                        <option value="glute">Glute</option>
                        <option value="calf">Calf</option>
                        <option value="breastplate">Breastplate</option>
                        <option value="back" label="Costas">Back</option>
                        <option value="trapeze">Trapeze</option>
                        <option value="biceps">Biceps</option>
                        <option value="triceps">Triceps</option>
                        <option value="abdomen">Abdomen</option>
                    </select>
                </div>

            </div>
            <div className='container-tasks'>
                
                <div className='task'>
                    <div className='content-text'>
                        <h3>Breastplate</h3>
                        <p>Chest training focused on hypertrophy.</p>
                    </div>
                    <div className='tags' id='tags'>
                        <p>January</p>
                        <p>2024</p>
                        <p>breastplate</p>
                    </div>
                </div>

                <div className='task'>
                    <div className='content-text'>
                        <h3 label='Costas'>Back</h3>
                        <p>Chest training focused on back.</p>
                    </div>
                    <div className='tags' id='tags'>
                        <p>January</p>
                        <p>2024</p>
                        <p>back</p>
                    </div>
                </div>
            
            </div>
        </main>
    )

}