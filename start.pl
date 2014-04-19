#!/usr/bin/perl

use Dancer2;

set serializer => 'JSON';

post '/' => sub {
    return params;
};  

post '/run/test' => sub {
    return params;
};

dance;
