import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SinglePackage = () => {

    const { id } = useParams();
    const [showPackage, setShowPackage] = useState(false);

    //added when payment had done
    const [unlockedPackage, setUnlockedPackage] = useState(
        {
            "id": 1,
            "userId": 1,
            "packageId": "p1",
            "packageName": "Package 1",
            "destinations": [
                {
                    "name": "Sigiriya",
                    "days": 4,
                    "perPerson": 5000
                },
                {
                    "name": "Dambulla",
                    "days":2,
                    "perPerson": 3000
                }
            ],
            "days": 5,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque lorem quis ipsum consequat, sit amet pharetra augue pretium. Fusce imperdiet, eros sed cursus finibus, nunc massa egestas ligula, eu suscipit turpis orci ut leo. Nunc in leo nec augue porta volutpat. Nam congue vitae nisl ut ullamcorper. In gravida velit at arcu dapibus euismod. In hac habitasse platea dictumst. Etiam eu sagittis ipsum. Proin convallis aliquet velit. Quisque lobortis tincidunt lorem at vulputate. Vestibulum a elit purus. Aenean sed odio neque. Sed mattis pretium lectus, et maximus lectus suscipit eget. Aenean felis ligula, maximus ac elementum euismod, viverra at sem.",
            "packagePrice": 25000,
        }
    );

    useEffect(() => {
        // check the whether the user have access to the particular package
        setShowPackage(true);
    },);

    const fetchPackage = () => {
        const userId = 2;
        const packageId = 2;
        if (userId == 2 && packageId == 2) {
            setShowPackage(false);
        }
    }


    return (
        <div>

            {showPackage ? (
                <div>
                    <div class="package-details">
                        <h2>{unlockedPackage.packageName}</h2>
                        <p>{unlockedPackage.description}</p>

                        {
                            unlockedPackage.destinations.map((destination) => (
                                <div class="package-info">
                                    <div class="package-info-item">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <p>Destination: {destination.name}</p>
                                    </div>

                                    <div class="package-info-item">
                                        <i class="fas fa-calendar-alt"></i>
                                        <p>Duration: {destination.days} days</p>
                                    </div>

                                    <div class="package-info-item">
                                        <i class="fas fa-users"></i>
                                        <p>Group size: 4-8 people</p>
                                    </div>

                                    <div class="package-info-item">
                                        <i class="fas fa-money-bill"></i>
                                        <p>Price: $1000 per person</p>
                                    </div>
                                </div>
                            ))
                        }


                        <div class="package-gallery">
                            <img src="package-image-1.jpg" alt="Package Image 1" />
                            <img src="package-image-2.jpg" alt="Package Image 2" />
                            <img src="package-image-3.jpg" alt="Package Image 3" />
                        </div>

                        
                    </div>
                </div>
            ) :
                <h1>You don't have access to view this package unless you purchase it</h1>
            }
        </div>
    )
}

export default SinglePackage