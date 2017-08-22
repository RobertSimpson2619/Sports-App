INSERT INTO `sports_db`.`routes` (`routeName`, `routeDistance`, `userLocation`) VALUES ('route1', '1 mile', 'Dallas');
INSERT INTO `sports_db`.`routes` (`routeName`, `routeDistance`, `userLocation`) VALUES ('route2', '2 mile', 'Irving');
INSERT INTO `sports_db`.`routes` (`routeName`, `routeDistance`, `userLocation`) VALUES ('route3', '3 mile', 'Addison');

INSERT INTO `sports_db`.`routes_users` (`user_id`, `route_id`) VALUES ('1', '1');
INSERT INTO `sports_db`.`routes_users` (`user_id`, `route_id`) VALUES ('1', '2');
INSERT INTO `sports_db`.`routes_users` (`user_id`, `route_id`) VALUES ('1', '3');
INSERT INTO `sports_db`.`routes_users` (`user_id`, `route_id`) VALUES ('2', '1');
INSERT INTO `sports_db`.`routes_users` (`user_id`, `route_id`) VALUES ('2', '2');