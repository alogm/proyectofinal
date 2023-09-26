function Adicionales({data}){
    

    return (
        <div>
            <div className="today">
                <h1>Today's Highlights</h1>
            </div>
            <div className="adi-container">
                <div className="adi1">
                    <h1>Wind status</h1>
                    <h1>{data ? data.wind.deg : "Loading..."} mph</h1>
                    <h1>wsw</h1>
                </div>
                <div className="adi2">
                    <h1>Humidity</h1>
                    <h1>{data ? data.main.humidity : "Loading..."} %</h1>
                    
                </div>
            </div>
            <div className="adi-container2">
                <div className="adi3">
                    <h1>Air Pressure</h1>
                    <h1>{data ? data.main.pressure : "Loading..."} mb</h1>
                </div>
                <div className="adi4">
                    <h1>Visibility</h1>
                    <h1>{data ? data.visibility : "Loading..."} miles</h1>
                </div>
            </div>


        </div>


        
        
    )
}
export default Adicionales