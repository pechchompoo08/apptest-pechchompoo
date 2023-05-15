import React from 'react'

export default function Member() {
    return (
        <div>
            <div className="text-warning">
                <h1>Member Table</h1>
            </div>
            <div class="container mt-3">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <img src='./images/32.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Naree Perfection Two Way Powder Smooth And Flawless SPF50/PA+++ 15g #02 Natural</td>
                            <td>Tel.098-2637591</td>
                            <td><a href="#" class="btn btn-secondary">Read more</a></td>

                        </tr>
                        <tr>
                            <td>
                                <img src='./images/33.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Naree Velvet Matte Creamy Lip Colors 3ml #820 Seductive</td>
                            <td>Tel.083-6977493</td>
                            <td><a href="#" class="btn btn-secondary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/34.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Naree Look At Me Slim Eyebrow Pencil 2g #03 Dark Brown</td>
                            <td>Tel.084-5891245</td>
                            <td><a href="#" class="btn btn-secondary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/35.jpg' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>Naree Perfect Cheek Blush 6.5g #03 You Are Cute</td>
                            <td>Tel.097-5642598</td>
                            <td><a href="#" class="btn btn-secondary">Read more</a></td>
                        </tr>
                        <tr>
                            <td>
                                <img src='./images/36.png' class="img-thumbnail" alt="Cinque Terre" width="50" high="50" /></td>
                            <td>NAREE Perfect Brush Made With Love </td>
                            <td>Tel.058-2578698</td>
                            <td><a href="#" class="btn btn-secondary">Read more</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}