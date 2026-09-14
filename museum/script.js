const enterButton =
    document.getElementById("enterButton");

if (enterButton) {

    enterButton.addEventListener("click", () => {

        window.location.href =
            "corridor.html";

    });

}


const doors =
    document.getElementById("doors");

if (doors) {

    const doorList =
        Array.from(
            doors.querySelectorAll(".door")
        );

    let currentDoor = 0;


    function moveDoors() {

        if (!doorList.length) {
            return;
        }

        const doorWidth =
            doorList[0].offsetWidth + 28;

        const container =
            document.querySelector(
                ".doors-container"
            );

        if (!container) {
            return;
        }

        const maxOffset =
            Math.max(
                0,
                doors.scrollWidth -
                container.clientWidth
            );

        const offset =
            Math.min(
                currentDoor * doorWidth,
                maxOffset
            );

        doors.style.transform =
            `translateX(-${offset}px)`;

    }


    doorList.forEach(door => {

        door.addEventListener(
            "click",
            () => {

                window.location.href =
                    door.dataset.room;

            }
        );

    });


    const leftButton =
        document.getElementById("leftButton");

    if (leftButton) {

        leftButton.addEventListener(
            "click",
            () => {

                currentDoor =
                    Math.max(
                        0,
                        currentDoor - 1
                    );

                moveDoors();

            }
        );

    }


    const rightButton =
        document.getElementById("rightButton");

    if (rightButton) {

        rightButton.addEventListener(
            "click",
            () => {

                currentDoor =
                    Math.min(
                        doorList.length - 1,
                        currentDoor + 1
                    );

                moveDoors();

            }
        );

    }


    window.addEventListener(
        "resize",
        moveDoors
    );

}


/* =========================================================
   EXHIBIT DATA
   ========================================================= */

const exhibitData = {

    eniac: {

        category: "COMPUTING",

        name: "ENIAC",

        year: "1946",

        generation: "Generation I",

        technology: "Vacuum tubes",

        purpose: "Scientific calculations",

        interestingFact:
            "It occupied an entire room and weighed about 30 tons.",

        description:
            "ENIAC was one of the first general-purpose electronic computers. It used thousands of vacuum tubes and was extremely large.",

        facts: [
            "Completed in 1946",
            "Used vacuum tubes",
            "Occupied a large room"
        ],

        image:
            "images/culture.jpg"

    },


    univac: {

        category: "COMPUTING",

        name: "UNIVAC I",

        year: "1951",

        generation: "Generation I",

        technology: "Vacuum tubes",

        purpose:
            "Business and government data",

        interestingFact:
            "It was used to predict the results of the 1952 U.S. presidential election. Its prediction was only four votes away from the actual result.",

        description:
            "UNIVAC I was one of the first commercial computers. It was designed to process large amounts of data.",

        facts: [
            "Introduced in 1951",
            "Used vacuum tubes",
            "Processed large amounts of data"
        ],

        image:
            "images/univac1.jpg"

    },


    ibm1401: {

        category: "TECHNOLOGY",

        name: "IBM 1401",

        year: "1959",

        generation: "Generation II",

        technology: "Transistors",

        purpose:
            "Business data processing",

        interestingFact:
            "More than 10,000 IBM 1401 systems were produced.",

        description:
            "IBM 1401 was a popular business computer that used transistors instead of vacuum tubes. It was smaller, faster, and more reliable than earlier computers.",

        facts: [
            "Introduced in 1959",
            "Used transistors",
            "Popular for business"
        ],

        image:
            "images/ibm-1401.jpg"

    },


    ibm7090: {

        category: "TECHNOLOGY",

        name: "IBM 7090",

        year: "1959",

        generation: "Generation II",

        technology: "Transistors",

        purpose:
            "Scientific and business computing",

        interestingFact:
            "The IBM 7090 was much faster than earlier vacuum-tube models.",

        description:
            "The IBM 7090 was a high-speed transistorized computer.",

        facts: [
            "Introduced in 1959",
            "Used transistor circuits",
            "Built for high-speed work"
        ],

        image:
            "images/ibm-7090.jpg"

    },


    ibmSystem360: {

        category: "SYSTEMS",

        name: "IBM System/360",

        year: "1964",

        generation: "Generation III",

        technology: "Integrated circuits",

        purpose:
            "General-purpose computing",

        interestingFact:
            "It became one of the most influential computer systems in history.",

        description:
            "IBM System/360 was a family of computers designed to work with the same software across different models.",

        facts: [
            "Introduced in 1964",
            "Used integrated circuits",
            "Supported many applications"
        ],

        image:
            "images/ibm-system360.jpg"

    },


    pdp8: {

        category: "MINICOMPUTERS",

        name: "PDP-8",

        year: "1965",

        generation: "Generation III",

        technology: "Integrated circuits",

        purpose:
            "Laboratories and education",

        interestingFact:
            "It is often considered the first successful mass-produced minicomputer.",

        description:
            "PDP-8 was a small and relatively affordable computer that helped make computers more accessible to universities and businesses.",

        facts: [
            "Introduced in 1965",
            "A famous minicomputer",
            "Used integrated circuits"
        ],

        image:
            "images/pdp-8.jpg"

    },


    ibmPC: {

        category: "PERSONAL COMPUTING",

        name: "IBM PC",

        year: "1981",

        generation: "Generation IV",

        technology: "Microprocessor",

        purpose:
            "Personal and business computing",

        interestingFact:
            "Its design influenced many later personal computers.",

        description:
            "The IBM PC became one of the most influential personal computers and helped establish standards for modern PCs.",

        facts: [
            "Introduced in 1981",
            "Used a microprocessor",
            "Designed for personal use"
        ],

        image:
            "images/ibm-pc.jpg"

    },


    appleII: {

        category: "PERSONAL COMPUTING",

        name: "Apple II",

        year: "1977",

        generation: "Generation IV",

        technology: "Microprocessor",

        purpose:
            "Home and education",

        interestingFact:
            "It was one of the first mass-produced personal computers.",

        description:
            "The Apple II made personal computing more accessible to homes and schools.",

        facts: [
            "Introduced in 1977",
            "Used a microprocessor",
            "Popular in education"
        ],

        image:
            "images/apple-ii.jpg"

    },


    aiComputer: {

        category:
            "ARTIFICIAL INTELLIGENCE",

        name:
            "AI Computing",

        year:
            "1980s–present",

        generation:
            "Generation V",

        technology:
            "AI and advanced computing",

        purpose:
            "Learning and automation",

        interestingFact:
            "Modern AI can process very large datasets.",

        description:
            "AI computing combines powerful hardware with software that learns from data.",

        facts: [
            "Uses machine learning",
            "Works with large datasets",
            "Supports automation"
        ],

        image:
            "images/ai-computer.jpg"

    },


    neuralNetworks: {

        category:
            "ARTIFICIAL INTELLIGENCE",

        name:
            "Neural Networks",

        year:
            "1980s–present",

        generation:
            "Generation V",

        technology:
            "Machine learning",

        purpose:
            "Pattern recognition",

        interestingFact:
            "Neural networks can learn patterns from examples.",

        description:
            "Neural networks are models used for images, language and prediction.",

        facts: [
            "Learn from data",
            "Used for images",
            "Used for language"
        ],

        image:
            "images/neural-networks.jpg"

    },


    futureAI: {

        category:
            "FUTURE TECHNOLOGY",

        name:
            "Future AI",

        year:
            "2030 and beyond",

        generation:
            "The Future",

        technology:
            "Advanced AI",

        purpose:
            "Assistance and autonomy",

        interestingFact:
            "Future AI capabilities are still being researched.",

        description:
            "Future AI may become more capable and adaptive.",

        facts: [
            "Still under development",
            "May support many fields",
            "Safety is important"
        ],

        image:
            "images/future-ai.jpg"

    },


    futureCity: {

        category:
            "FUTURE TECHNOLOGY",

        name:
            "City of Tomorrow",

        year:
            "2030 and beyond",

        generation:
            "The Future",

        technology:
            "Connected intelligent systems",

        purpose:
            "Transport and public services",

        interestingFact:
            "Smart-city systems can connect data from many services.",

        description:
            "Future cities may use connected computers to manage transport and energy.",

        facts: [
            "Uses connected sensors",
            "Can optimize services",
            "Combines many technologies"
        ],

        image:
            "images/future-city.jpg"

    }

};


/* =========================================================
   ROOM DATA
   ========================================================= */

const roomData = {

    generation1: {

        number: "ROOM 01",

        title: "Generation I",

        intro:
            "The first electronic computers introduced a new era of automatic calculation.",

        years:
            "1940s–1950s",

        technology:
            "Vacuum tubes",

        characteristics:
            "Very large, expensive and power-hungry.",

        innovations:
            "Electronic calculation and early stored-program ideas.",

        example:
            "ENIAC",

        active:
            1,

        exhibits: [
            ["eniac", "images/culture.jpg"],
            ["univac", "images/univac1.jpg"]
        ]

    },


    generation2: {

        number: "ROOM 02",

        title: "Generation II",

        intro:
            "Transistors made computers smaller, faster and more reliable.",

        years:
            "Late 1950s–mid 1960s",

        technology:
            "Transistors",

        characteristics:
            "Smaller, faster and more energy-efficient.",

        innovations:
            "Transistor circuits and magnetic-core memory.",

        example:
            "IBM 1401",

        active:
            2,

        exhibits: [
            ["ibm1401", "images/ibm-1401.jpg"],
            ["ibm7090", "images/ibm-7090.jpg"]
        ]

    },


    generation3: {

        number: "ROOM 03",

        title: "Generation III",

        intro:
            "Integrated circuits increased computing power while reducing size.",

        years:
            "Mid 1960s–early 1970s",

        technology:
            "Integrated circuits",

        characteristics:
            "Smaller, more powerful and more reliable.",

        innovations:
            "Integrated circuits and operating systems.",

        example:
            "IBM System/360",

        active:
            3,

        exhibits: [
            ["ibmSystem360", "images/ibm-system360.jpg"],
            ["pdp8", "images/pdp-8.jpg"]
        ]

    },


    generation4: {

        number: "ROOM 04",

        title: "Generation IV",

        intro:
            "Microprocessors helped create the personal computer era.",

        years:
            "1970s–1980s",

        technology:
            "Microprocessors",

        characteristics:
            "Compact, affordable and increasingly powerful.",

        innovations:
            "Single-chip CPUs, PCs and networks.",

        example:
            "IBM Personal Computer",

        active:
            4,

        exhibits: [
            ["ibmPC", "images/ibm-pc.jpg"],
            ["appleII", "images/apple-ii.jpg"]
        ]

    },


    generation5: {

        number: "ROOM 05",

        title: "Generation V",

        intro:
            "Modern computing increasingly focuses on AI and learning systems.",

        years:
            "1980s–present",

        technology:
            "Artificial intelligence",

        characteristics:
            "Automation, intelligent software and large-scale data processing.",

        innovations:
            "Machine learning, neural networks and cloud computing.",

        example:
            "AI-powered systems",

        active:
            5,

        exhibits: [
            ["aiComputer", "images/ai-computer.jpg"],
            ["neuralNetworks", "images/neural-networks.jpg"]
        ]

    },


    future: {

        number: "ROOM 06",

        title: "The Future",

        intro:
            "Explore possible directions for computing beyond today's technologies.",

        years:
            "2030 and beyond",

        technology:
            "Intelligent systems",

        characteristics:
            "Adaptability, automation and connectivity.",

        innovations:
            "Advanced AI, robotics and new interfaces.",

        example:
            "Autonomous systems",

        active:
            5,

        exhibits: [
            ["futureAI", "images/future-ai.jpg"],
            ["futureCity", "images/future-city.jpg"]
        ]

    }

};


/* =========================================================
   ROOM INITIALIZATION
   ========================================================= */

const room =
    document.querySelector(".room[data-room]");


if (room) {

    const key =
        room.dataset.room;

    const data =
        roomData[key];


    if (data) {

        room.innerHTML = `

            <header class="room-header">

                <div>

                    <p class="room-number">
                        ${data.number}
                    </p>

                    <h1>
                        ${data.title}
                    </h1>

                    <p class="room-description">
                        ${data.intro}
                    </p>

                </div>


                <button
                    class="exit-button"
                    id="exitButton">

                    Exit to Corridor

                </button>

            </header>


            <section class="technology-section">

                <div class="section-heading">

                    <p class="eyebrow">
                        TECHNOLOGY OVERVIEW
                    </p>

                    <h2>
                        What defined this generation?
                    </h2>

                </div>


                <div class="technology-grid">

                    <div class="technology-item">

                        <span>
                            Years
                        </span>

                        <strong>
                            ${data.years}
                        </strong>

                    </div>


                    <div class="technology-item">

                        <span>
                            Main technology
                        </span>

                        <strong>
                            ${data.technology}
                        </strong>

                    </div>


                    <div class="technology-item">

                        <span>
                            Main characteristics
                        </span>

                        <strong>
                            ${data.characteristics}
                        </strong>

                    </div>


                    <div class="technology-item">

                        <span>
                            Important innovations
                        </span>

                        <strong>
                            ${data.innovations}
                        </strong>

                    </div>


                    <div class="technology-item">

                        <span>
                            Example
                        </span>

                        <strong>
                            ${data.example}
                        </strong>

                    </div>

                </div>


                <div class="technology-timeline">

                    ${createTimeline(data.active)}

                </div>

            </section>


            <section class="exhibits-section">

                <div class="section-heading">

                    <p class="eyebrow">
                        EXHIBITION
                    </p>

                    <h2>
                        Featured Exhibits
                    </h2>

                </div>


                <div class="exhibits">

                    ${createExhibits(data.exhibits)}

                </div>

            </section>


            <footer class="room-footer">

                ${data.title} · Museum of Generations

            </footer>


            ${createModal()}

        `;


        const exitButton =
            document.getElementById("exitButton");


        if (exitButton) {

            exitButton.addEventListener(
                "click",
                () => {

                    window.location.href =
                        "corridor.html";

                }
            );

        }


        setupModal();

    }

}


/* =========================================================
   TIMELINE
   ========================================================= */

function createTimeline(active) {

    const names = [

        "Vacuum Tubes",

        "Transistors",

        "Integrated Circuits",

        "Microprocessors",

        "Artificial Intelligence"

    ];


    return names.map(
        (name, index) => {

            const number =
                index + 1;


            const activeClass =
                number === active
                    ? "active"
                    : "";


            return `

                <div
                    class="technology-step ${activeClass}">

                    <span>
                        ${number}
                    </span>

                    <b>
                        ${name}
                    </b>

                </div>


                ${number < 5
                    ? '<div class="technology-line"></div>'
                    : ''
                }

            `;

        }

    ).join("");

}


/* =========================================================
   EXHIBITS
   ========================================================= */

function createExhibits(exhibits) {

    return exhibits.map(
        item => {

            const key =
                item[0];


            const exhibit =
                exhibitData[key];


            if (!exhibit) {
                return "";
            }


            /*
             * IMPORTANT:
             * Image path is taken from exhibitData.
             * This makes the card and modal use
             * exactly the same image.
             */

            const image =
                exhibit.image || item[1];


            return `

                <article class="exhibit">

                    <button
                        class="exhibit-image"
                        data-exhibit="${key}">

                        <img
                            src="${image}"
                            alt="${exhibit.name}"
                            loading="lazy">

                        <span class="image-overlay">
                            View Exhibit
                        </span>

                    </button>


                    <div class="exhibit-info">

                        <p class="exhibit-label">
                            ${exhibit.category}
                        </p>


                        <h3>
                            ${exhibit.name}
                        </h3>


                        <p>
                            ${exhibit.description}
                        </p>


                        <button
                            class="info-button"
                            data-exhibit="${key}">

                            View Information

                        </button>

                    </div>

                </article>

            `;

        }

    ).join("");

}


/* =========================================================
   MODAL
   ========================================================= */

function createModal() {

    return `

        <div
            class="modal"
            id="exhibitModal">


            <div
                class="modal-backdrop"
                data-close-modal>
            </div>


            <div class="modal-window">


                <button
                    class="modal-close"
                    id="closeModal">

                    ×

                </button>


                <div class="modal-image">

                    <img
                        id="dialogImage"
                        src=""
                        alt="">

                </div>


                <div class="modal-body">


                    <p
                        class="eyebrow"
                        id="dialogCategory">
                    </p>


                    <h2
                        id="dialogTitle">
                    </h2>


                    <div class="dialog-details">


                        <div>

                            <span>
                                Year
                            </span>

                            <strong
                                id="dialogYear">
                            </strong>

                        </div>


                        <div>

                            <span>
                                Generation
                            </span>

                            <strong
                                id="dialogGeneration">
                            </strong>

                        </div>


                        <div>

                            <span>
                                Technology
                            </span>

                            <strong
                                id="dialogTechnology">
                            </strong>

                        </div>


                        <div>

                            <span>
                                Purpose
                            </span>

                            <strong
                                id="dialogPurpose">
                            </strong>

                        </div>


                    </div>


                    <p
                        class="dialog-description"
                        id="dialogDescription">
                    </p>


                    <div class="dialog-fact">

                        <span>
                            Interesting fact
                        </span>

                        <p
                            id="dialogInterestingFact">
                        </p>

                    </div>


                    <div class="dialog-facts">

                        <h3>
                            Quick facts
                        </h3>


                        <ul
                            id="dialogFacts">
                        </ul>

                    </div>


                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   MODAL SETUP
   ========================================================= */

function setupModal() {

    const modal =
        document.getElementById(
            "exhibitModal"
        );


    if (!modal) {
        return;
    }


    const closeButton =
        document.getElementById(
            "closeModal"
        );


    const backdrop =
        modal.querySelector(
            "[data-close-modal]"
        );


    document
        .querySelectorAll(
            "[data-exhibit]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openExhibit(
                        button.dataset.exhibit
                    );

                }
            );

        });


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeModal
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   OPEN EXHIBIT
   ========================================================= */

function openExhibit(key) {

    const exhibit =
        exhibitData[key];


    if (!exhibit) {
        return;
    }


    const dialogImage =
        document.getElementById(
            "dialogImage"
        );


    if (dialogImage) {

        dialogImage.src =
            exhibit.image;

        dialogImage.alt =
            exhibit.name;

    }


    const dialogCategory =
        document.getElementById(
            "dialogCategory"
        );


    if (dialogCategory) {

        dialogCategory.textContent =
            exhibit.category;

    }


    const dialogTitle =
        document.getElementById(
            "dialogTitle"
        );


    if (dialogTitle) {

        dialogTitle.textContent =
            exhibit.name;

    }


    const dialogYear =
        document.getElementById(
            "dialogYear"
        );


    if (dialogYear) {

        dialogYear.textContent =
            exhibit.year;

    }


    const dialogGeneration =
        document.getElementById(
            "dialogGeneration"
        );


    if (dialogGeneration) {

        dialogGeneration.textContent =
            exhibit.generation;

    }


    const dialogTechnology =
        document.getElementById(
            "dialogTechnology"
        );


    if (dialogTechnology) {

        dialogTechnology.textContent =
            exhibit.technology;

    }


    const dialogPurpose =
        document.getElementById(
            "dialogPurpose"
        );


    if (dialogPurpose) {

        dialogPurpose.textContent =
            exhibit.purpose;

    }


    const dialogDescription =
        document.getElementById(
            "dialogDescription"
        );


    if (dialogDescription) {

        dialogDescription.textContent =
            exhibit.description;

    }


    const dialogInterestingFact =
        document.getElementById(
            "dialogInterestingFact"
        );


    if (dialogInterestingFact) {

        dialogInterestingFact.textContent =
            exhibit.interestingFact;

    }


    const facts =
        document.getElementById(
            "dialogFacts"
        );


    if (facts) {

        facts.innerHTML = "";


        exhibit.facts.forEach(
            fact => {

                const li =
                    document.createElement(
                        "li"
                    );


                li.textContent =
                    fact;


                facts.appendChild(li);

            }
        );

    }


    const modal =
        document.getElementById(
            "exhibitModal"
        );


    if (modal) {

        modal.classList.add("open");

        document.body.style.overflow =
            "hidden";

    }

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    const modal =
        document.getElementById(
            "exhibitModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}