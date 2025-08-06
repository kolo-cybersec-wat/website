import MarkdownIt from 'markdown-it';
import { convert } from 'html-to-text';
const parser = new MarkdownIt();

export const createExcerpt = (body) => {
	const html = parser.render(body);
	const options = {
		wordwrap: null,
		selectors: [
			{ selector: 'a', options: { ignoreHref: true } },
			{ selector: 'img', format: 'skip' },
			{ selector: 'figure', format: 'skip' },
		],
	};
	const text = convert(html, options);
	const distilled = convert(text, options);
	return distilled;
};

export const createExcerptFromPost = (post) => {
	const fullText = createExcerpt(post.body);
	if (fullText.length <= 300) return fullText;

	const truncated = fullText.substring(0, 300);
	const lastSpaceIndex = truncated.lastIndexOf(' ');

	if (lastSpaceIndex === -1) {
		// No space found, fallback to hard cut
		return `${truncated}...`;
	}

	return `${truncated.substring(0, lastSpaceIndex)}...`;
};
