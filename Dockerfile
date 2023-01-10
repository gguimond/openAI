FROM public.ecr.aws/lambda/nodejs:14

WORKDIR /var/task

RUN npm install openai

COPY *.js ./

CMD [ "index.handler" ]