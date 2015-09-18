<?php 
// le pasamos el tiempo como string desde watch.js con el método GET en la url a través de la variable "t"
?>

<?php 

$hora = date('h')*30-90; 
$minutero = (date('i')+1)*6-90;
$segundero = (date('s')+1)*6-90;

?>

	<div class="digital"><?php echo date('H').':'.date('i').':'.date('s'); ?></div>
	<div class="marco">
		<div class="esfera">
			<div class="hora" style="transform: rotate(<?php echo $hora; ?>deg);"></div>
			<div class="minutero" style="transform: rotate(<?php echo $minutero; ?>deg);"></div>
			<div class="segundero" style="transform: rotate(<?php echo $segundero; ?>deg);"></div>
			<div class="eje"></div>
		</div>
	</div>


<?php