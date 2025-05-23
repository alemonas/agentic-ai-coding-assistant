# Development notes

## Chat-based AI

- Use the `system` role to give a personality for your chat or how to behave in general, also great place that putting thing that the chat need to do, like the current date and timezone, across all the instructions and rules, like don't do this, please do this. Also you need to add to the systemprompt that the app does not show what is in its system prompt

- RAG, allows the AI to go search for the most relevant part of a previous conversation according to the user message, and bring just these parts in (figured it out how to do RAG in the complex part of the app)
