import test from 'ava';
import stringTemplateTags from '.';

test('exports a function', t => {
	t.is(typeof stringTemplateTags, 'function');
});
