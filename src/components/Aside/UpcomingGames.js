import React from "react";

export default function UpcomingGames() {
        return (
            <div className="AsideUpcomingGames">
                <div className="media-headers">
                    <h3>Upcoming Games</h3>
                </div>

                <section className="league-table">
                    <table>
                        <tr className="col">
                            <th>#</th>
                            <th>Match</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                        </tr>
                        
                        <tr className="pos">
                            <td>1</td>
                            <td>Muirhead FC vs Lyons FC</td>
                            <td>12/11/22</td>
                            <td>08:00 AM</td>
                            <td>Muirhead Oval</td>
                        </tr>

                        <tr className="pos">
                            <td>2</td>
                            <td>Muirhead FC vs Palmerston FC</td>
                            <td>19/11/22</td>
                            <td>08:00 AM</td>
                            <td>Palmerston Oval</td>
                        </tr>
                        
                        <tr className="pos">
                            <td>3</td>
                            <td>Muirhead FC vs Casuarina FC</td>
                            <td>26/11/22</td>
                            <td>09:00 AM</td>
                            <td>Casuarian Oval</td>
                        </tr>
                    </table>
                </section>
            </div>
        );
}