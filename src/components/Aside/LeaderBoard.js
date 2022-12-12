import React from "react";

export default function LeaderBoard() {
    return (
        <div className="AsideLeaderBoard">
            {/* Upcoming Games and Latest Match Results */}

            <div className="media-headers">
                <h3>League Table - Local Standings</h3>
            </div>

            {/* League ladder table */}

            <section className="league-table">
                <table>
                    <tr className="col">
                        <th>#</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>

                    <tr className="pos">
                        <td>1</td>
                        <td>Muirhead FC</td>
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>

                    <tr className="pos">
                        <td>3</td>
                        <td>Casuarina FC</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>4</td>
                        <td>4</td>
                    </tr>

                    <tr className="pos">
                        <td>4</td>
                        <td>Lyons FC</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>

                    <tr className="pos">
                        <td>4</td>
                        <td>Palmerston FC</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                </table>
            </section>
        </div>
    );
}