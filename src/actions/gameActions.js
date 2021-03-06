import { actionTypes } from './types';
import VERB_DATA from '../data/data';

export function setDisplayLanguage(language) {
	return { type: actionTypes.SET_DISPLAY_LANGUAGE, language };
}

export function toggleTense(tense) {
	return { type: actionTypes.TOGGLE_TENSE, tense };
}

export function togglePronoun(pronoun) {
	return { type: actionTypes.TOGGLE_PRONOUN, pronoun };
}

export function setIrregularVerbs(option) {
	return { type: actionTypes.SET_IRREGULAR, option };
}

export function setReflexiveVerbs(option) {
	return { type: actionTypes.SET_REFLEXIVE, option };
}

export function setSelectedVerbs(option) {
	return { type: actionTypes.SET_SELECTED_VERBS, option };
}

export function setUserDefinedVerbs(verbString) {
	const validVerbs = VERB_DATA.filter((verbs) =>
		verbString
			.toLowerCase()
			.replace(/ /g, '')
			.split(',')
			.includes(verbs.infinitive.toLowerCase())
	);
	return { type: actionTypes.SET_USER_DEFINED_VERBS, verbString, validVerbs };
}

export function setScore(score) {
	return { type: actionTypes.SET_SCORE, score };
}

export function setTargetScore(score) {
	return { type: actionTypes.SET_TARGET_SCORE, score };
}

export function setUserAnswer(answer) {
	return { type: actionTypes.SET_USER_ANSWER, answer };
}

export function toggleCurrentlyPlaying() {
	return { type: actionTypes.TOGGLE_CURRENTLY_PLAYING };
}

export function setQuestionList(list) {
	return { type: actionTypes.SET_QUESTION_LIST, list };
}

export function setAnswerList(list) {
	return { type: actionTypes.SET_ANSWER_LIST, list };
}

export function setCurrentQuestion(
	questionNumber,
	verb,
	tense,
	pronoun,
	answers
) {
	return {
		type: actionTypes.SET_CURRENT_QUESTION,
		questionNumber,
		verb,
		tense,
		pronoun,
		answers,
	};
}

export function setErrors(errors) {
	return { type: actionTypes.SET_ERRORS, errors };
}

export function toggleIsLoading(){
	return { type: actionTypes.SET_IS_LOADING }
}
