import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public defaultFrom: string;
	public defaultTo: string;
	public deltas: string[];

	// I initialize the app component.
	constructor() {

		this.defaultFrom = new Date().toString();
		this.defaultTo = new Date().toString();
		this.deltas = [];

		this.parseDates( this.defaultFrom, this.defaultTo );

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I parse the given dates and calculate all of the meaningful deltas.
	public parseDates( fromValue: string, toValue: string ) : void {
    console.log(1);
		var fromMs = Date.parse( fromValue );
		var toMs = Date.parse( toValue );

		// Ensure that we have a valid date-range to work with.
		if ( isNaN( fromMs ) || isNaN( toMs ) || ( fromMs > toMs ) ) {

			console.group( "Invalid date range - no calculations to perform." );
			console.log( "From:", fromMs );
			console.log( "To:", toMs );
			console.groupEnd();
			return;

		}

		var deltaSeconds = ( ( toMs - fromMs ) / 1000 );

		this.deltas = [
			this.format( this.calculateSeconds( deltaSeconds ) ),
			this.format( this.calculateMinutesSeconds( deltaSeconds ) ),
			this.format( this.calculateHoursMinutesSeconds( deltaSeconds ) ),
			this.format( this.calculateDaysHoursMinutesSeconds( deltaSeconds ) ),
			this.format( this.calculateWeeksDaysHoursMinutesSeconds( deltaSeconds ) )
		];

		// Strip out any deltas that start with "0". These won't add any additional
		// insight above and beyond the previous delta calculations.
		// --
		// NOTE: Always using the first value, even if "0 Seconds".
		this.deltas = this.deltas.filter(
			( value, index ) => {

				return( ! index || ! value.startsWith( "0" ) );

			}
		);

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I calculate the delta breakdown using Day as the largest unit.
	private calculateDaysHoursMinutesSeconds( delta: number ) : number[] {

		var days = Math.floor( delta / 60 / 60 / 24 );
		var remainder = ( delta - ( days * 60 * 60 * 24 ) );

		return( [ days, ...this.calculateHoursMinutesSeconds( remainder ) ] );

	}


	// I calculate the delta breakdown using Hour as the largest unit.
	private calculateHoursMinutesSeconds( delta: number ) : number[] {

		var hours = Math.floor( delta / 60 / 60 );
		var remainder = ( delta - ( hours * 60 * 60 ) );

		return( [ hours, ...this.calculateMinutesSeconds( remainder ) ] );

	}


	// I calculate the delta breakdown using Minute as the largest unit.
	private calculateMinutesSeconds( delta: number ) : number[] {

		var minutes = Math.floor( delta / 60 );
		var remainder = ( delta - ( minutes * 60 ) );

		return( [ minutes, ...this.calculateSeconds( remainder ) ] );

	}


	// I calculate the delta breakdown using Second as the largest unit.
	private calculateSeconds( delta: number ) : number[] {

		return( [ delta ] );

	}


	// I calculate the delta breakdown using Week as the largest unit.
	private calculateWeeksDaysHoursMinutesSeconds( delta: number ) : number[] {

		var weeks = Math.floor( delta / 60 / 60 / 24 / 7 );
		var remainder = ( delta - ( weeks * 60 * 60 * 24 * 7 ) );

		return( [ weeks, ...this.calculateDaysHoursMinutesSeconds( remainder ) ] );

	}


	// I format the set of calculated delta-values as a human readable string.
	private format( values: number[] ) : string {

		var units: string[] = [ "Weeks", "Days", "Hours", "Minutes", "Seconds" ];
		var parts: string[] = [];

		// Since the values are calculated largest to smallest, let's iterate over them
		// backwards so that we know which values line up with which units.
		for ( var value of values.slice().reverse() ) {

			parts.unshift( value.toLocaleString() + " " + units.pop() );

		}

		return( parts.join( ", " ) );

	}
}
