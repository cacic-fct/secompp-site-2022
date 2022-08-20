<script>
	import minicursosIcon from '$lib/img/minicursos.svg';
	import palestrasIcon from '$lib/img/palestras.svg';
</script>

<div class="container schedule-container">
	<h1>Programação</h1>
	<div class="table-responsive" style="--bs-secondary-rgb: 255, 255, 255">
		<table class="table">
			<thead style="color: #fefedf">
				<tr>
					<th style="width: 10px" />
					<th>Segunda</th>
					<th>Terça</th>
					<th>Quarta</th>
					<th>Quinta</th>
					<th>Sexta</th>
				</tr>
			</thead>
			<tbody id="schedule-table" style="color: #fefedf">
				<tr>
					<td
						>15:00 <img
							src={minicursosIcon}
							alt="Minicursos"
							loading="lazy"
							class="table-icon" />
					</td>
					<td>Minicurso<br />Introdução à coisas estranhas</td>
					<td>Minicurso<br />Introdução à coisas estranhas</td>
					<td>Minicurso<br />Introdução à coisas estranhas</td>
					<td>Minicurso<br />Introdução à coisas estranhas</td>
					<td>Minicurso<br />Introdução à coisas estranhas</td>
				</tr>
				<tr>
					<td
						>16:00 <img
							src={minicursosIcon}
							alt="Minicursos"
							loading="lazy"
							class="table-icon" /></td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
				</tr>
				<tr id="break1" class="table-break">
					<td />
					<td />
					<td />
					<td />
					<td />
					<td />
				</tr>
				<tr>
					<td
						>18:00 <img
							src={palestrasIcon}
							alt="Palestras"
							loading="lazy"
							class="table-icon" /></td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
					<td>Cell 4</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="caption-container small">
		<div class="row" style="max-width: 574px;">
			<div id="icon-desc" class="col-sm">
				<div>
					<img
						src={minicursosIcon}
						loading="lazy"
						alt="Ícone minicurso"
						class="caption-icon" />
					&ensp;Minicurso
				</div>
				<div>
					<img
						src={palestrasIcon}
						alt="Ícone palestra"
						loading="lazy"
						class="caption-icon" />
					&ensp;Palestra
				</div>
			</div>
			<div class="col-sm">
				<p class="caption-gray" id="caption-large-screen">
					Clique no evento para visualizar mais informações.<br />
				</p>
				<div id="caption-small-screen">
					<p class="mb-0">
						Arraste para esquerda para visualizar mais eventos.
					</p>
					<p>
						Clique ou toque no evento para visualizar mais informações.<br />
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@mixin typo-gray {
		color: var(--bs-gray-600);
	}

	.caption-gray {
		@include typo-gray;
	}

	th:first-child,
	td:first-child {
		position: sticky;
		left: 0px;
		background-color: #000;
	}

	tr.table-break > td {
		padding-top: 0px;
		padding-bottom: 1px;
		background: #dfdfdf;
	}

	#icon-desc {
		@media (min-width: 574px) {
			max-width: 150px;
			> div:first-child {
				margin-bottom: 1rem;
			}
		}

		@media (max-width: 574px) {
			display: flex;
			> div {
				flex: 0 0 auto;
				width: 50%;
			}
		}
	}

	#schedule-table > tr > td:not(:first-child) {
		min-width: 200px;
	}

	#caption-small-screen {
		@media (max-width: 574px) {
			margin-top: 12px;
		}

		@media (min-width: 1200px) {
			display: none;
		}
	}

	@media (max-width: 1199px) {
		#caption-large-screen {
			@include typo-gray;
			display: none;
		}
	}

	.schedule-container {
		@media (min-width: 576px) {
			max-width: 767px;
		}
		@media (min-width: 768px) {
			max-width: 991px;
			padding: 24px;
		}
		@media (min-width: 992px) {
			max-width: 1199px;
			padding: 24px;
		}
		padding-bottom: 0px;
	}

	.caption-container {
		@include typo-gray;
		@media (min-width: 576px) {
			max-width: 767px;
		}
		@media (min-width: 768px) {
			max-width: 991px;
			padding: 0px 24px;
		}
		@media (min-width: 992px) {
			max-width: 1199px;
			padding: 0px 24px;
		}
		padding: 12px;
		margin: auto;
	}

	.table-icon {
		filter: invert(100%) sepia(64%) saturate(532%) hue-rotate(353deg)
			brightness(109%) contrast(99%);
		float: right;
		width: 22px;
	}

	.caption-icon {
		filter: invert(48%) sepia(10%) saturate(449%) hue-rotate(167deg)
			brightness(90%) contrast(82%);
		width: 22px;
	}
</style>
