
build: components index.js lib/*.js
	@component build
	@touch build/done
	@rm build/done
	@echo build done

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
