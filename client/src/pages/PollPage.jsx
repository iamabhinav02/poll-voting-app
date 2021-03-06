import React from "react";

import Poll from "../components/Poll";
import ErrorMessage from "../components/errorMessage";

const PollPage = ({ match, getPoll }) => {
	getPoll(match.params.id);

	return (
		<div>
			<ErrorMessage />
			<Poll />
		</div>
	);
};

export default PollPage;
