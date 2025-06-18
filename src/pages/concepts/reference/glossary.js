import React, {useState} from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Glossary() {
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [state, setState] = useState(() => {
    const initialState = {};
    for (let i = 0; i < alphabet.length; i++) {
      initialState[alphabet[i]] = true;
    }
    return initialState;
  });

  const [searchTerm, setSearchTerm] = useState("");

  
  const entries = {
    A: [
      {
        name: "Acceptance Testing",
        link: "/docs/concepts/reference/glossary/acceptance-testing",
      },
      {
        name: "Agile Unit Testing",
        link: "/docs/concepts/reference/glossary/agile-unit-testing",
      },
      {
        name: "AI Test Completion",
        link: "/docs/concepts/reference/glossary/ai-test-completion",
      },
    ],
    B: [
      {
        name: "BDD",
        link: "/docs/concepts/reference/glossary/behaviour-driven-development",
      },
      {
        name: "Beta Testing",
        link: "/docs/concepts/reference/glossary/beta-testing",
      },
      {
        name: "Black Box Testing",
        link: "/docs/concepts/reference/glossary/black-box-testing",
      },
    ],
    C: [
      {
        name: "Code Coverage",
        link: "/docs/concepts/reference/glossary/code-coverage",
      },
      {
        name: "Cucumber Testing",
        link: "/docs/concepts/reference/glossary/cucumber-testing",
      },
    ],
    E: [
      {
        name: "End To End Testing",
        link: "/docs/concepts/reference/glossary/end-to-end-testing",
      },
      {
        name: "Error Guessing",
        link: "/docs/concepts/reference/glossary/error-guessing",
      },
    ],
    F: [
      {
        name: "Functional Testing",
        link: "/docs/concepts/reference/glossary/functional-testing",
      },
    ],
    G: [
      {
        name: "Gray Box Testing",
        link: "/docs/concepts/reference/glossary/gray-box-testing",
      },
    ],
    I: [
      {
        name: "Integration Testing",
        link: "/docs/concepts/reference/glossary/integration-testing",
      },
      {
        name: "Idempotency",
        link: "/docs/concepts/reference/glossary/idempotency",
      },
    ],
    M: [
      {
        name: "Manual Testing",
        link: "/docs/concepts/reference/glossary/manual-testing",
      },
      {
        name: "Mocks",
        link: "/docs/concepts/reference/glossary/mocks",
      },
      {
        name: "Microservice Testing",
        link: "/docs/concepts/reference/glossary/microservice-testing",
      },
    ],
    R: [
      {
        name: "Regression Testing",
        link: "/docs/concepts/reference/glossary/regression-testing",
      },
    ],
    S: [
      {
        name: "Stubs",
        ink: "/docs/concepts/reference/glossary/stubs",
      },
      {
        name: "Software Testing Life Cycle",
        link: "/docs/concepts/reference/glossary/software-testing-life-cycle",
      },
    ],
    T: [
      {
        name: "Test Driven TDD",
        link: "/docs/concepts/reference/glossary/test-driven-development",
      },
      {
        name: "Test Data Generation",
        link: "/docs/concepts/reference/glossary/test-data-generation",
      },
    ],
    U: [
      {
        name: "Unit Test Automation",
        link: "/docs/concepts/reference/glossary/unit-test-automation",
      },
      {
        name: "Unit Testing",
        link: "/docs/concepts/reference/glossary/unit-testing",
      },
    ],
    W: [
      {
        name: "White Box Testing",
        link: "/docs/concepts/reference/glossary/white-box-testing",
      },
    ],
  };
  const { siteConfig } = useDocusaurusContext();

  const handleClick = (letter) => {
    setState((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  return (
    <Layout
      title="About the docs"
      permalink="/reference/glossary"
      description="User General Information about Keploy's Documentation"
    >
      <main className="glossary-container">
        <h1 className="glossary-title">Glossary</h1>

        {/* Search Bar */}
        <div className="glossary-search">
          <input
            type="text"
            placeholder="Search glossary terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glossary-search-input"
          />
        </div>

        {/* Alphabet Buttons */}
        <div className="glossary-buttons">
          {new Array(26).fill(0).map((_, i) => {
            const letter = String.fromCharCode(65 + i);
            const isActive = state[letter];
            const isDisabled = entries[letter] === undefined;

            return (
              <button
                key={i}
                className={`${
                  isDisabled
                    ? ""
                    : isActive
                    ? "active"
                    : ""
                }`}
                disabled={isDisabled}
                onClick={() => handleClick(letter)}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Glossary Grid */}
        <div className="glossary-grid">
          {Object.entries(state).map(([key, value]) => {
            if (!value) return null;

            const filtered = entries[key]?.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (!filtered || filtered.length === 0) return null;

            return (
              <div key={key} className="glossary-section">
                <h3 className="glossary-heading">{key}</h3>
                {filtered.map(({ name, link }, i) => (
                  <a key={i} href={link}>
                    {name}
                  </a>
                ))}
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export default Glossary;