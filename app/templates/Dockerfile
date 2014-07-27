# Heroku buildpack test
# Testing a buildpack in a cedarish image

FROM progrium/cedarish
MAINTAINER <%= username %>
RUN mkdir /buildpack-test
ADD . /buildpack-test
WORKDIR /buildpack-test
CMD bin/test