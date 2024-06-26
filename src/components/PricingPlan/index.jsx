import { PropTypes } from "prop-types";
import List from "../List";
import "./PricingPlan.css";

const PricingPlan = ({ name, price, details, extraClass = "" }) => {
  return (
    <div className={`pricing-plan ${extraClass}`}>
      <header className="plan-header">
        <p className="plan-name">{name}</p>
        <p className="plan-price">
          <span>$</span>
          {price}
        </p>
        <p className="plan-text">per month.</p>
      </header>
      <List list={details} />
      <div className="plan-signup">
        <a href="#" className={`btn btn--primary`}>
          Start eating well
        </a>
      </div>
    </div>
  );
};

PricingPlan.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  details: PropTypes.array,

  extraClass: PropTypes.string,
};
export default PricingPlan;
